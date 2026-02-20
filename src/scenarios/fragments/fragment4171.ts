import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4169 } from "./fragment4169";
import type { FragmentToken4170 } from "./fragment4170";

export const FRAGMENT_4171 = gql(`
  fragment Fragment4171 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult4171 = ResultOf<typeof FRAGMENT_4171>;
type FragmentSelf4171 = NonNullable<FragmentResult4171>;

export type FragmentToken4171 =
  | FragmentSelf4171["__typename"]
  | FragmentSelf4171["typenameHint"] | FragmentToken4169 | FragmentToken4170;
