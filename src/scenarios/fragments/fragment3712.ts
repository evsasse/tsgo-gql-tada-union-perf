import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3710 } from "./fragment3710";
import type { FragmentToken3711 } from "./fragment3711";

export const FRAGMENT_3712 = gql(`
  fragment Fragment3712 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult3712 = ResultOf<typeof FRAGMENT_3712>;
type FragmentSelf3712 = NonNullable<FragmentResult3712>;

export type FragmentToken3712 =
  | FragmentSelf3712["__typename"]
  | FragmentSelf3712["typenameHint"] | FragmentToken3710 | FragmentToken3711;
