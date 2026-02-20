import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2349 } from "./fragment2349";
import type { FragmentToken2350 } from "./fragment2350";

export const FRAGMENT_2351 = gql(`
  fragment Fragment2351 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult2351 = ResultOf<typeof FRAGMENT_2351>;
type FragmentSelf2351 = NonNullable<FragmentResult2351>;

export type FragmentToken2351 =
  | FragmentSelf2351["__typename"]
  | FragmentSelf2351["typenameHint"] | FragmentToken2349 | FragmentToken2350;
