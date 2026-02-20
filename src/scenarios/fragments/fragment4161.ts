import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4159 } from "./fragment4159";
import type { FragmentToken4160 } from "./fragment4160";

export const FRAGMENT_4161 = gql(`
  fragment Fragment4161 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult4161 = ResultOf<typeof FRAGMENT_4161>;
type FragmentSelf4161 = NonNullable<FragmentResult4161>;

export type FragmentToken4161 =
  | FragmentSelf4161["__typename"]
  | FragmentSelf4161["typenameHint"] | FragmentToken4159 | FragmentToken4160;
