import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3711 } from "./fragment3711";
import type { FragmentToken3712 } from "./fragment3712";

export const FRAGMENT_3713 = gql(`
  fragment Fragment3713 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult3713 = ResultOf<typeof FRAGMENT_3713>;
type FragmentSelf3713 = NonNullable<FragmentResult3713>;

export type FragmentToken3713 =
  | FragmentSelf3713["__typename"]
  | FragmentSelf3713["typenameHint"] | FragmentToken3711 | FragmentToken3712;
