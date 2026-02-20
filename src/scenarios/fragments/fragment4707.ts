import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4705 } from "./fragment4705";
import type { FragmentToken4706 } from "./fragment4706";

export const FRAGMENT_4707 = gql(`
  fragment Fragment4707 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult4707 = ResultOf<typeof FRAGMENT_4707>;
type FragmentSelf4707 = NonNullable<FragmentResult4707>;

export type FragmentToken4707 =
  | FragmentSelf4707["__typename"]
  | FragmentSelf4707["typenameHint"] | FragmentToken4705 | FragmentToken4706;
