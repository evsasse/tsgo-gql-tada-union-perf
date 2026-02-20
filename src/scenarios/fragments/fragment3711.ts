import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3709 } from "./fragment3709";
import type { FragmentToken3710 } from "./fragment3710";

export const FRAGMENT_3711 = gql(`
  fragment Fragment3711 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult3711 = ResultOf<typeof FRAGMENT_3711>;
type FragmentSelf3711 = NonNullable<FragmentResult3711>;

export type FragmentToken3711 =
  | FragmentSelf3711["__typename"]
  | FragmentSelf3711["typenameHint"] | FragmentToken3709 | FragmentToken3710;
