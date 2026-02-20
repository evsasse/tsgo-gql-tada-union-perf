import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4548 } from "./fragment4548";
import type { FragmentToken4549 } from "./fragment4549";

export const FRAGMENT_4550 = gql(`
  fragment Fragment4550 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult4550 = ResultOf<typeof FRAGMENT_4550>;
type FragmentSelf4550 = NonNullable<FragmentResult4550>;

export type FragmentToken4550 =
  | FragmentSelf4550["__typename"]
  | FragmentSelf4550["typenameHint"] | FragmentToken4548 | FragmentToken4549;
