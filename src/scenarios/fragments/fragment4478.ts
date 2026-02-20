import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4476 } from "./fragment4476";
import type { FragmentToken4477 } from "./fragment4477";

export const FRAGMENT_4478 = gql(`
  fragment Fragment4478 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult4478 = ResultOf<typeof FRAGMENT_4478>;
type FragmentSelf4478 = NonNullable<FragmentResult4478>;

export type FragmentToken4478 =
  | FragmentSelf4478["__typename"]
  | FragmentSelf4478["typenameHint"] | FragmentToken4476 | FragmentToken4477;
