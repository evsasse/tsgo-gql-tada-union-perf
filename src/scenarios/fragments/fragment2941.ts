import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2939 } from "./fragment2939";
import type { FragmentToken2940 } from "./fragment2940";

export const FRAGMENT_2941 = gql(`
  fragment Fragment2941 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult2941 = ResultOf<typeof FRAGMENT_2941>;
type FragmentSelf2941 = NonNullable<FragmentResult2941>;

export type FragmentToken2941 =
  | FragmentSelf2941["__typename"]
  | FragmentSelf2941["typenameHint"] | FragmentToken2939 | FragmentToken2940;
