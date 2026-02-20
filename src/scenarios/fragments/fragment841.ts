import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken839 } from "./fragment839";
import type { FragmentToken840 } from "./fragment840";

export const FRAGMENT_841 = gql(`
  fragment Fragment841 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult841 = ResultOf<typeof FRAGMENT_841>;
type FragmentSelf841 = NonNullable<FragmentResult841>;

export type FragmentToken841 =
  | FragmentSelf841["__typename"]
  | FragmentSelf841["typenameHint"] | FragmentToken839 | FragmentToken840;
