import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4257 } from "./fragment4257";
import type { FragmentToken4258 } from "./fragment4258";

export const FRAGMENT_4259 = gql(`
  fragment Fragment4259 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult4259 = ResultOf<typeof FRAGMENT_4259>;
type FragmentSelf4259 = NonNullable<FragmentResult4259>;

export type FragmentToken4259 =
  | FragmentSelf4259["__typename"]
  | FragmentSelf4259["typenameHint"] | FragmentToken4257 | FragmentToken4258;
