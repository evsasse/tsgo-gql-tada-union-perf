import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4347 } from "./fragment4347";
import type { FragmentToken4348 } from "./fragment4348";

export const FRAGMENT_4349 = gql(`
  fragment Fragment4349 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult4349 = ResultOf<typeof FRAGMENT_4349>;
type FragmentSelf4349 = NonNullable<FragmentResult4349>;

export type FragmentToken4349 =
  | FragmentSelf4349["__typename"]
  | FragmentSelf4349["typenameHint"] | FragmentToken4347 | FragmentToken4348;
