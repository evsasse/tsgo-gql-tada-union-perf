import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken119 } from "./fragment119";
import type { FragmentToken120 } from "./fragment120";

export const FRAGMENT_121 = gql(`
  fragment Fragment121 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult121 = ResultOf<typeof FRAGMENT_121>;
type FragmentSelf121 = NonNullable<FragmentResult121>;

export type FragmentToken121 =
  | FragmentSelf121["__typename"]
  | FragmentSelf121["typenameHint"] | FragmentToken119 | FragmentToken120;
