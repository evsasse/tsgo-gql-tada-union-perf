import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4724 } from "./fragment4724";
import type { FragmentToken4725 } from "./fragment4725";

export const FRAGMENT_4726 = gql(`
  fragment Fragment4726 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult4726 = ResultOf<typeof FRAGMENT_4726>;
type FragmentSelf4726 = NonNullable<FragmentResult4726>;

export type FragmentToken4726 =
  | FragmentSelf4726["__typename"]
  | FragmentSelf4726["typenameHint"] | FragmentToken4724 | FragmentToken4725;
