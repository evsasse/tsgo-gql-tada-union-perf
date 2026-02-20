import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4676 } from "./fragment4676";
import type { FragmentToken4677 } from "./fragment4677";

export const FRAGMENT_4678 = gql(`
  fragment Fragment4678 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult4678 = ResultOf<typeof FRAGMENT_4678>;
type FragmentSelf4678 = NonNullable<FragmentResult4678>;

export type FragmentToken4678 =
  | FragmentSelf4678["__typename"]
  | FragmentSelf4678["typenameHint"] | FragmentToken4676 | FragmentToken4677;
