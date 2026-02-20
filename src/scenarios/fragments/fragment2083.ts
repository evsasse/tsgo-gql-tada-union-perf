import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2081 } from "./fragment2081";
import type { FragmentToken2082 } from "./fragment2082";

export const FRAGMENT_2083 = gql(`
  fragment Fragment2083 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult2083 = ResultOf<typeof FRAGMENT_2083>;
type FragmentSelf2083 = NonNullable<FragmentResult2083>;

export type FragmentToken2083 =
  | FragmentSelf2083["__typename"]
  | FragmentSelf2083["typenameHint"] | FragmentToken2081 | FragmentToken2082;
