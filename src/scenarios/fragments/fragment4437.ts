import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4435 } from "./fragment4435";
import type { FragmentToken4436 } from "./fragment4436";

export const FRAGMENT_4437 = gql(`
  fragment Fragment4437 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult4437 = ResultOf<typeof FRAGMENT_4437>;
type FragmentSelf4437 = NonNullable<FragmentResult4437>;

export type FragmentToken4437 =
  | FragmentSelf4437["__typename"]
  | FragmentSelf4437["typenameHint"] | FragmentToken4435 | FragmentToken4436;
