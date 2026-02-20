import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4346 } from "./fragment4346";
import type { FragmentToken4347 } from "./fragment4347";

export const FRAGMENT_4348 = gql(`
  fragment Fragment4348 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult4348 = ResultOf<typeof FRAGMENT_4348>;
type FragmentSelf4348 = NonNullable<FragmentResult4348>;

export type FragmentToken4348 =
  | FragmentSelf4348["__typename"]
  | FragmentSelf4348["typenameHint"] | FragmentToken4346 | FragmentToken4347;
