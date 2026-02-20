import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4709 } from "./fragment4709";
import type { FragmentToken4710 } from "./fragment4710";

export const FRAGMENT_4711 = gql(`
  fragment Fragment4711 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult4711 = ResultOf<typeof FRAGMENT_4711>;
type FragmentSelf4711 = NonNullable<FragmentResult4711>;

export type FragmentToken4711 =
  | FragmentSelf4711["__typename"]
  | FragmentSelf4711["typenameHint"] | FragmentToken4709 | FragmentToken4710;
