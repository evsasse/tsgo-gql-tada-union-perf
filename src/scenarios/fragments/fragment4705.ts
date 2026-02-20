import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4703 } from "./fragment4703";
import type { FragmentToken4704 } from "./fragment4704";

export const FRAGMENT_4705 = gql(`
  fragment Fragment4705 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult4705 = ResultOf<typeof FRAGMENT_4705>;
type FragmentSelf4705 = NonNullable<FragmentResult4705>;

export type FragmentToken4705 =
  | FragmentSelf4705["__typename"]
  | FragmentSelf4705["typenameHint"] | FragmentToken4703 | FragmentToken4704;
