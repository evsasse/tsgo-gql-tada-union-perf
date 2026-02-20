import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4699 } from "./fragment4699";
import type { FragmentToken4700 } from "./fragment4700";

export const FRAGMENT_4701 = gql(`
  fragment Fragment4701 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult4701 = ResultOf<typeof FRAGMENT_4701>;
type FragmentSelf4701 = NonNullable<FragmentResult4701>;

export type FragmentToken4701 =
  | FragmentSelf4701["__typename"]
  | FragmentSelf4701["typenameHint"] | FragmentToken4699 | FragmentToken4700;
