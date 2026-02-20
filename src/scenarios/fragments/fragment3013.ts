import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3011 } from "./fragment3011";
import type { FragmentToken3012 } from "./fragment3012";

export const FRAGMENT_3013 = gql(`
  fragment Fragment3013 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult3013 = ResultOf<typeof FRAGMENT_3013>;
type FragmentSelf3013 = NonNullable<FragmentResult3013>;

export type FragmentToken3013 =
  | FragmentSelf3013["__typename"]
  | FragmentSelf3013["typenameHint"] | FragmentToken3011 | FragmentToken3012;
