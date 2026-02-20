import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken256 } from "./fragment256";
import type { FragmentToken257 } from "./fragment257";

export const FRAGMENT_258 = gql(`
  fragment Fragment258 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult258 = ResultOf<typeof FRAGMENT_258>;
type FragmentSelf258 = NonNullable<FragmentResult258>;

export type FragmentToken258 =
  | FragmentSelf258["__typename"]
  | FragmentSelf258["typenameHint"] | FragmentToken256 | FragmentToken257;
