import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4221 } from "./fragment4221";
import type { FragmentToken4222 } from "./fragment4222";

export const FRAGMENT_4223 = gql(`
  fragment Fragment4223 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult4223 = ResultOf<typeof FRAGMENT_4223>;
type FragmentSelf4223 = NonNullable<FragmentResult4223>;

export type FragmentToken4223 =
  | FragmentSelf4223["__typename"]
  | FragmentSelf4223["typenameHint"] | FragmentToken4221 | FragmentToken4222;
