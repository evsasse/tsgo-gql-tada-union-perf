import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4348 } from "./fragment4348";
import type { FragmentToken4349 } from "./fragment4349";

export const FRAGMENT_4350 = gql(`
  fragment Fragment4350 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult4350 = ResultOf<typeof FRAGMENT_4350>;
type FragmentSelf4350 = NonNullable<FragmentResult4350>;

export type FragmentToken4350 =
  | FragmentSelf4350["__typename"]
  | FragmentSelf4350["typenameHint"] | FragmentToken4348 | FragmentToken4349;
