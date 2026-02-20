import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2921 } from "./fragment2921";
import type { FragmentToken2922 } from "./fragment2922";

export const FRAGMENT_2923 = gql(`
  fragment Fragment2923 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult2923 = ResultOf<typeof FRAGMENT_2923>;
type FragmentSelf2923 = NonNullable<FragmentResult2923>;

export type FragmentToken2923 =
  | FragmentSelf2923["__typename"]
  | FragmentSelf2923["typenameHint"] | FragmentToken2921 | FragmentToken2922;
