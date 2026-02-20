import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken360 } from "./fragment360";
import type { FragmentToken361 } from "./fragment361";

export const FRAGMENT_362 = gql(`
  fragment Fragment362 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult362 = ResultOf<typeof FRAGMENT_362>;
type FragmentSelf362 = NonNullable<FragmentResult362>;

export type FragmentToken362 =
  | FragmentSelf362["__typename"]
  | FragmentSelf362["typenameHint"] | FragmentToken360 | FragmentToken361;
