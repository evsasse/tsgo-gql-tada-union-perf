import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken510 } from "./fragment510";
import type { FragmentToken511 } from "./fragment511";

export const FRAGMENT_512 = gql(`
  fragment Fragment512 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult512 = ResultOf<typeof FRAGMENT_512>;
type FragmentSelf512 = NonNullable<FragmentResult512>;

export type FragmentToken512 =
  | FragmentSelf512["__typename"]
  | FragmentSelf512["typenameHint"] | FragmentToken510 | FragmentToken511;
