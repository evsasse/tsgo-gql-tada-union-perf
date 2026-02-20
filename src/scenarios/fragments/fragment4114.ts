import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4112 } from "./fragment4112";
import type { FragmentToken4113 } from "./fragment4113";

export const FRAGMENT_4114 = gql(`
  fragment Fragment4114 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult4114 = ResultOf<typeof FRAGMENT_4114>;
type FragmentSelf4114 = NonNullable<FragmentResult4114>;

export type FragmentToken4114 =
  | FragmentSelf4114["__typename"]
  | FragmentSelf4114["typenameHint"] | FragmentToken4112 | FragmentToken4113;
