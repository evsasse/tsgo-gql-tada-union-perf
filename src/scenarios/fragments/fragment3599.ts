import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3597 } from "./fragment3597";
import type { FragmentToken3598 } from "./fragment3598";

export const FRAGMENT_3599 = gql(`
  fragment Fragment3599 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult3599 = ResultOf<typeof FRAGMENT_3599>;
type FragmentSelf3599 = NonNullable<FragmentResult3599>;

export type FragmentToken3599 =
  | FragmentSelf3599["__typename"]
  | FragmentSelf3599["typenameHint"] | FragmentToken3597 | FragmentToken3598;
