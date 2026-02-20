import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2861 } from "./fragment2861";
import type { FragmentToken2862 } from "./fragment2862";

export const FRAGMENT_2863 = gql(`
  fragment Fragment2863 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult2863 = ResultOf<typeof FRAGMENT_2863>;
type FragmentSelf2863 = NonNullable<FragmentResult2863>;

export type FragmentToken2863 =
  | FragmentSelf2863["__typename"]
  | FragmentSelf2863["typenameHint"] | FragmentToken2861 | FragmentToken2862;
