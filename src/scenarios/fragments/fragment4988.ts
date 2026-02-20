import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4986 } from "./fragment4986";
import type { FragmentToken4987 } from "./fragment4987";

export const FRAGMENT_4988 = gql(`
  fragment Fragment4988 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult4988 = ResultOf<typeof FRAGMENT_4988>;
type FragmentSelf4988 = NonNullable<FragmentResult4988>;

export type FragmentToken4988 =
  | FragmentSelf4988["__typename"]
  | FragmentSelf4988["typenameHint"] | FragmentToken4986 | FragmentToken4987;
