import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4992 } from "./fragment4992";
import type { FragmentToken4993 } from "./fragment4993";

export const FRAGMENT_4994 = gql(`
  fragment Fragment4994 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult4994 = ResultOf<typeof FRAGMENT_4994>;
type FragmentSelf4994 = NonNullable<FragmentResult4994>;

export type FragmentToken4994 =
  | FragmentSelf4994["__typename"]
  | FragmentSelf4994["typenameHint"] | FragmentToken4992 | FragmentToken4993;
