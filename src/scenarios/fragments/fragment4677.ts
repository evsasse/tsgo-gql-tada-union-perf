import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4675 } from "./fragment4675";
import type { FragmentToken4676 } from "./fragment4676";

export const FRAGMENT_4677 = gql(`
  fragment Fragment4677 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult4677 = ResultOf<typeof FRAGMENT_4677>;
type FragmentSelf4677 = NonNullable<FragmentResult4677>;

export type FragmentToken4677 =
  | FragmentSelf4677["__typename"]
  | FragmentSelf4677["typenameHint"] | FragmentToken4675 | FragmentToken4676;
