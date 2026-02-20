import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken149 } from "./fragment149";
import type { FragmentToken150 } from "./fragment150";

export const FRAGMENT_151 = gql(`
  fragment Fragment151 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult151 = ResultOf<typeof FRAGMENT_151>;
type FragmentSelf151 = NonNullable<FragmentResult151>;

export type FragmentToken151 =
  | FragmentSelf151["__typename"]
  | FragmentSelf151["typenameHint"] | FragmentToken149 | FragmentToken150;
