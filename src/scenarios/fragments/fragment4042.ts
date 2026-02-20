import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4040 } from "./fragment4040";
import type { FragmentToken4041 } from "./fragment4041";

export const FRAGMENT_4042 = gql(`
  fragment Fragment4042 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult4042 = ResultOf<typeof FRAGMENT_4042>;
type FragmentSelf4042 = NonNullable<FragmentResult4042>;

export type FragmentToken4042 =
  | FragmentSelf4042["__typename"]
  | FragmentSelf4042["typenameHint"] | FragmentToken4040 | FragmentToken4041;
