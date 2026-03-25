from pathlib import Path


TARGET = Path("node_modules/@capacitor-community/sqlite/android/build.gradle")
OLD = "classpath 'com.android.tools.build:gradle:8.2.1'"
NEW = "classpath 'com.android.tools.build:gradle:8.7.2'"


def main() -> None:
    if not TARGET.exists():
        print(f"skip: {TARGET} not found")
        return

    original = TARGET.read_text()
    if NEW in original:
        print("sqlite gradle already patched")
        return

    if OLD not in original:
        print("skip: expected AGP pin not found")
        return

    TARGET.write_text(original.replace(OLD, NEW))
    print("patched sqlite gradle AGP version")


if __name__ == "__main__":
    main()
