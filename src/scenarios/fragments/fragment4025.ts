import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4023 } from "./fragment4023";
import type { FragmentToken4024 } from "./fragment4024";

export const FRAGMENT_4025 = gql(`
  fragment Fragment4025 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult4025 = ResultOf<typeof FRAGMENT_4025>;
type FragmentSelf4025 = NonNullable<FragmentResult4025>;

export type FragmentToken4025 =
  | FragmentSelf4025["__typename"]
  | FragmentSelf4025["typenameHint"] | FragmentToken4023 | FragmentToken4024;
