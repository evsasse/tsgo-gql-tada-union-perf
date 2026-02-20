import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4730 } from "./fragment4730";
import type { FragmentToken4731 } from "./fragment4731";

export const FRAGMENT_4732 = gql(`
  fragment Fragment4732 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult4732 = ResultOf<typeof FRAGMENT_4732>;
type FragmentSelf4732 = NonNullable<FragmentResult4732>;

export type FragmentToken4732 =
  | FragmentSelf4732["__typename"]
  | FragmentSelf4732["typenameHint"] | FragmentToken4730 | FragmentToken4731;
