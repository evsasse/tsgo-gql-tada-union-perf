import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken793 } from "./fragment793";
import type { FragmentToken794 } from "./fragment794";

export const FRAGMENT_795 = gql(`
  fragment Fragment795 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult795 = ResultOf<typeof FRAGMENT_795>;
type FragmentSelf795 = NonNullable<FragmentResult795>;

export type FragmentToken795 =
  | FragmentSelf795["__typename"]
  | FragmentSelf795["typenameHint"] | FragmentToken793 | FragmentToken794;
