import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2887 } from "./fragment2887";
import type { FragmentToken2888 } from "./fragment2888";

export const FRAGMENT_2889 = gql(`
  fragment Fragment2889 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult2889 = ResultOf<typeof FRAGMENT_2889>;
type FragmentSelf2889 = NonNullable<FragmentResult2889>;

export type FragmentToken2889 =
  | FragmentSelf2889["__typename"]
  | FragmentSelf2889["typenameHint"] | FragmentToken2887 | FragmentToken2888;
