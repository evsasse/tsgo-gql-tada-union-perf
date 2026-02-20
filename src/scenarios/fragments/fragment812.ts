import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken810 } from "./fragment810";
import type { FragmentToken811 } from "./fragment811";

export const FRAGMENT_812 = gql(`
  fragment Fragment812 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult812 = ResultOf<typeof FRAGMENT_812>;
type FragmentSelf812 = NonNullable<FragmentResult812>;

export type FragmentToken812 =
  | FragmentSelf812["__typename"]
  | FragmentSelf812["typenameHint"] | FragmentToken810 | FragmentToken811;
