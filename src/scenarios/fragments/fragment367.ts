import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken365 } from "./fragment365";
import type { FragmentToken366 } from "./fragment366";

export const FRAGMENT_367 = gql(`
  fragment Fragment367 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult367 = ResultOf<typeof FRAGMENT_367>;
type FragmentSelf367 = NonNullable<FragmentResult367>;

export type FragmentToken367 =
  | FragmentSelf367["__typename"]
  | FragmentSelf367["typenameHint"] | FragmentToken365 | FragmentToken366;
