import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4261 } from "./fragment4261";
import type { FragmentToken4262 } from "./fragment4262";

export const FRAGMENT_4263 = gql(`
  fragment Fragment4263 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult4263 = ResultOf<typeof FRAGMENT_4263>;
type FragmentSelf4263 = NonNullable<FragmentResult4263>;

export type FragmentToken4263 =
  | FragmentSelf4263["__typename"]
  | FragmentSelf4263["typenameHint"] | FragmentToken4261 | FragmentToken4262;
