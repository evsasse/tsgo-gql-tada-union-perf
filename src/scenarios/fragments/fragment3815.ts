import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3813 } from "./fragment3813";
import type { FragmentToken3814 } from "./fragment3814";

export const FRAGMENT_3815 = gql(`
  fragment Fragment3815 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult3815 = ResultOf<typeof FRAGMENT_3815>;
type FragmentSelf3815 = NonNullable<FragmentResult3815>;

export type FragmentToken3815 =
  | FragmentSelf3815["__typename"]
  | FragmentSelf3815["typenameHint"] | FragmentToken3813 | FragmentToken3814;
