import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken391 } from "./fragment391";
import type { FragmentToken392 } from "./fragment392";

export const FRAGMENT_393 = gql(`
  fragment Fragment393 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult393 = ResultOf<typeof FRAGMENT_393>;
type FragmentSelf393 = NonNullable<FragmentResult393>;

export type FragmentToken393 =
  | FragmentSelf393["__typename"]
  | FragmentSelf393["typenameHint"] | FragmentToken391 | FragmentToken392;
