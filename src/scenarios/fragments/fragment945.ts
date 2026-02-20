import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken943 } from "./fragment943";
import type { FragmentToken944 } from "./fragment944";

export const FRAGMENT_945 = gql(`
  fragment Fragment945 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult945 = ResultOf<typeof FRAGMENT_945>;
type FragmentSelf945 = NonNullable<FragmentResult945>;

export type FragmentToken945 =
  | FragmentSelf945["__typename"]
  | FragmentSelf945["typenameHint"] | FragmentToken943 | FragmentToken944;
