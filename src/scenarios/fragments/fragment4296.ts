import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4294 } from "./fragment4294";
import type { FragmentToken4295 } from "./fragment4295";

export const FRAGMENT_4296 = gql(`
  fragment Fragment4296 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult4296 = ResultOf<typeof FRAGMENT_4296>;
type FragmentSelf4296 = NonNullable<FragmentResult4296>;

export type FragmentToken4296 =
  | FragmentSelf4296["__typename"]
  | FragmentSelf4296["typenameHint"] | FragmentToken4294 | FragmentToken4295;
