import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4711 } from "./fragment4711";
import type { FragmentToken4712 } from "./fragment4712";

export const FRAGMENT_4713 = gql(`
  fragment Fragment4713 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult4713 = ResultOf<typeof FRAGMENT_4713>;
type FragmentSelf4713 = NonNullable<FragmentResult4713>;

export type FragmentToken4713 =
  | FragmentSelf4713["__typename"]
  | FragmentSelf4713["typenameHint"] | FragmentToken4711 | FragmentToken4712;
