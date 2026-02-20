import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4706 } from "./fragment4706";
import type { FragmentToken4707 } from "./fragment4707";

export const FRAGMENT_4708 = gql(`
  fragment Fragment4708 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult4708 = ResultOf<typeof FRAGMENT_4708>;
type FragmentSelf4708 = NonNullable<FragmentResult4708>;

export type FragmentToken4708 =
  | FragmentSelf4708["__typename"]
  | FragmentSelf4708["typenameHint"] | FragmentToken4706 | FragmentToken4707;
