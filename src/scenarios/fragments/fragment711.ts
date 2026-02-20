import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken709 } from "./fragment709";
import type { FragmentToken710 } from "./fragment710";

export const FRAGMENT_711 = gql(`
  fragment Fragment711 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult711 = ResultOf<typeof FRAGMENT_711>;
type FragmentSelf711 = NonNullable<FragmentResult711>;

export type FragmentToken711 =
  | FragmentSelf711["__typename"]
  | FragmentSelf711["typenameHint"] | FragmentToken709 | FragmentToken710;
